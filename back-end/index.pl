#!/usr/bin/env perl
use warnings;
use DBI;
use strict;

my $dbh = DBI -> connect("dbi:SQLite:test.db") ;

my $sth = $dbh->prepare(qq{ UPDATE table_data SET last_name = ? WHERE last_name isNull });

$sth->execute('null');


$sth = $dbh->prepare('SELECT * FROM table_data');

$sth->execute();

while (my @row = $sth ->fetchrow_array) {
  my @new_row = map(ucfirst, map(lc, @row));
  print "\t @new_row \n";
}

$dbh->disconnect;
