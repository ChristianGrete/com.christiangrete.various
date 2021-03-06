#!/bin/sh

# POSIX compliant function to test whether a string contains a sequence

contains () {
  if [ -z ${1:+string} ]
    then
      echo 'string: parameter not set or null' >&2

      return 1
  fi

  if [ -z ${2:+sequence} ]
    then
      echo 'sequence: parameter not set or null' >&2

      return 1
  fi

  [ "${1#*$2}" = "$1" ] && return 1
}
