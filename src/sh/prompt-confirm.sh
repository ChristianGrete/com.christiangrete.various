#!/bin/sh

confirm () {
  printf "$1 (y/n) ";
  case $(read answer && printf "$answer") in
    [YyJj]* ) return 0;;
    [Nn]* ) return 1;;
    *) yesNo "$1";;
  esac
}
