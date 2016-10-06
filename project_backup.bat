set THISDIR=%cd%
cd C:\Users\Administrator\Desktop
mkdir ElasticSearchBFBackup
cd ElasticSearchBFBackup
xcopy %THISDIR% /e
@echo off
start echo "Backup Successful!" 