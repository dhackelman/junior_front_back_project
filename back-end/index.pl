#!/usr/bin/env perl
use warnings;
use DBI;
use strict;

my $dbh = DBI -> connect("dbi:SQLite:test.db") ;

# test to make sure null values don't break the print subroutine
# my $sth = $dbh->prepare(qq{UPDATE alien_table SET last_name = ? WHERE last_name isNull});
#
# $sth->execute('yo');

$sth = $dbh->prepare('SELECT * FROM alien_table');

$sth->execute();

while (my @row = $sth ->fetchrow_array) {
  my @new_row = map(ucfirst, map(lc, @row));
  print "\t @new_row \n";
}

$dbh->disconnect;
