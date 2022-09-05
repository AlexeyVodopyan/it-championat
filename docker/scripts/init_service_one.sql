create role drill with login password 'drill';
create database drill with owner = drill encoding = 'UTF8' connection limit = -1;
alter database drill set time zone 'Europe/Moscow';
grant all on database drill to drill;
revoke all on database drill from public;
revoke create on schema public from public;