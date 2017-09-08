# MasalahYangSeringDihadapi
   1. Ketika melakukan bzr commit kadang-kadang terjadi kesalahan seperti ini:
      bzr: ERROR: bzrlib.errors.UnlockableTransport: Cannot lock: transport is
      read only: <bzrlib.transport.http._pycurl.PyCurlTransport url=http://
      bazaar.launchpad.net/~blankon-pemaket/blankon/paket-siap-bangun/.bzr/
      repository/>
      Traceback (most recent call last):
        File "/usr/lib/python2.5/site-packages/bzrlib/commands.py", line 650,
      in run_bzr_catch_errors
          return run_bzr(argv)
        File "/usr/lib/python2.5/site-packages/bzrlib/commands.py", line 612,
      in run_bzr
          ret = run(*run_argv)
        File "/usr/lib/python2.5/site-packages/bzrlib/commands.py", line 304,
      in run_argv_aliases
          return self.run(**all_cmd_args)
        File "/usr/lib/python2.5/site-packages/bzrlib/builtins.py", line 2118,
      in run
          reporter=reporter)
        File "/usr/lib/python2.5/site-packages/bzrlib/decorators.py", line 165,
      in write_locked
          return unbound(self, *args, **kwargs)
        File "/usr/lib/python2.5/site-packages/bzrlib/workingtree_4.py", line
      244, in commit
          result = WorkingTree3.commit(self, message, revprops, *args,
      **kwargs)
        File "/usr/lib/python2.5/site-packages/bzrlib/decorators.py", line 165,
      in write_locked
          return unbound(self, *args, **kwargs)
        File "/usr/lib/python2.5/site-packages/bzrlib/mutabletree.py", line
      160, in commit
          revprops=revprops, *args, **kwargs)
        File "/usr/lib/python2.5/site-packages/bzrlib/commit.py", line 265, in
      commit
          self._check_bound_branch()
        File "/usr/lib/python2.5/site-packages/bzrlib/commit.py", line 486, in
      _check_bound_branch
          self.master_branch.lock_write()
        File "/usr/lib/python2.5/site-packages/bzrlib/branch.py", line 1308, in
      lock_write
          self.repository.lock_write()
        File "/usr/lib/python2.5/site-packages/bzrlib/repository.py", line 235,
      in lock_write
          self.control_files.lock_write()
        File "/usr/lib/python2.5/site-packages/bzrlib/lockable_files.py", line
      234, in lock_write
          self._lock.lock_write()
        File "/usr/lib/python2.5/site-packages/bzrlib/lockdir.py", line 420, in
      lock_write
          self.wait_lock()
        File "/usr/lib/python2.5/site-packages/bzrlib/lockdir.py", line 387, in
      wait_lock
          self.attempt_lock()
        File "/usr/lib/python2.5/site-packages/bzrlib/lockdir.py", line 198, in
      attempt_lock
          raise UnlockableTransport(self.transport)
      UnlockableTransport: Cannot lock: transport is read only:
      <bzrlib.transport.http._pycurl.PyCurlTransport url=http://
      bazaar.launchpad.net/~blankon-pemaket/blankon/paket-siap-bangun/.bzr/
      repository/>
      bzr 0.15.0 on python 2.5.1.final.0 (linux2)
      arguments: ['/usr/bin/bzr', 'commit']
Hal ini terjadi jika sebelum melakukan bzr commit anda melakukan bzr co <url>.
Solusinya adalah dengan melakukan
bzr bind sftp://<akun>@bazaar.launchpad.net/~blankon-pemaket/blankon/
<nama_paket>
KategoriBlankOn KategoriPemaket
Last modified on 06/18/2008 10:03:27 AM
#### 
    
 
 
 
 
 
---
 
