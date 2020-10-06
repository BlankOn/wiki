# Contoh Script

## Debmirror

```
#!/bin/bash
debmirror -v -passive \
--host=mirror.unej.ac.id \
--root=blankon --method=ftp \
--progress \
--dist=meuligoe,meuligoe-updates,meuligoe-security \
--section=main,restricted \
--arch=i386 --ignore-release-gpg --no-source -pdiff=none /ftp/blankon/
```

## rsync
```
#!/bin/sh
set -e

TO=/ftp/blankon
RSYNC_HOST=yeyen.blankonlinux.or.id
RSYNC_DIR=archive
LOGDIR=/tmp
LOCK_TIMEOUT=360
LOGFILE=$LOGDIR/blankon-mirror.log
HOSTNAME=`hostname -f`
LOCK="${TO}/Archive-Update-Progress-from-${RSYNC_HOST}"
TMP_EXCLUDE="--exclude .~tmp~/"
EXCLUDE="\
  --exclude local/ --exclude gutsy/ --exclude unstable/"
  
if [ -z "$TO" ] || [ -z "$RSYNC_HOST" ] || [ -z "$RSYNC_DIR" ] || [ -z "$LOGDIR" ]; then
	echo "One of the following variables seems to be empty:"
	echo "TO, RSYNC_HOST, RSYNC_DIR or LOGDIR"
	exit 2
fi

if [ ! -d "${TO}/project/trace/" ]; then
  mkdir -p ${TO}/project/trace
fi

if [ -f "$LOCK" ]; then
  if [ "`find $LOCK -maxdepth 1 -cmin -$LOCK_TIMEOUT`" = "" ]; then
    if ps ax | grep '[r]'sync | grep -q $RSYNC_HOST; then
      echo "stale lock found, but a rsync is still running, aiee!"
      exit 1
    else
      echo "stale lock found (not accessed in the last $LOCK_TIMEOUT minutes), forcing update!"
      rm -f $LOCK
    fi
  else
    echo "current lock file exists, unable to start rsync!"
    exit 1
  fi
fi

touch $LOCK

trap "rm -f $LOCK" exit

set +e

echo "mirroring BlankOn archive"
echo "from $RSYNC_HOST::$RSYNC_DIR to $TO"

# First sync /pool
rsync --recursive --links --hard-links --times \
     --verbose --progress \
     --timeout=3600 \
     $TMP_EXCLUDE $EXCLUDE $SOURCE_EXCLUDE \
     $RSYNC_HOST::$RSYNC_DIR/pool/ $TO/pool/ > $LOGFILE 2>&1
result=$?

if [ "$result" = 0 ]; then
	# Now sync the remaining stuff

echo "mirror tinggal  satu step lagi"
rsync --recursive --links --hard-links --times \
	     --verbose --progress \
	     --delay-updates --delete-after \
	     --timeout=3600 \
	     $TMP_EXCLUDE $EXCLUDE \
	     $RSYNC_HOST::$RSYNC_DIR/ $TO >> $LOGFILE 2>&1

	LANG=C date -u > "${TO}/project/trace/${HOSTNAME}"
else
	echo "ERROR: Help, something weird happened" | tee -a $LOGFILE
	echo "mirroring /pool exited with exitcode" $result | tee -a $LOGFILE
fi

MAILTO=udienz@gmail.com
if [ -n "$MAILTO" ]; then
	mail -s "BlankOn archive synced" $MAILTO < $LOGFILE
fi

savelog $LOGFILE >/dev/null

rm $LOCK
```
