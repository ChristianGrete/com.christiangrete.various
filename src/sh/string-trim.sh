#!/bin/sh

# POSIX compliant function to strip the first character from a string

trim () {
  if [ -z ${1:+string} ]
    then
      echo 'string: parameter not set or null' >&2

      return 1
  fi

  echo "${1#?}"
}
