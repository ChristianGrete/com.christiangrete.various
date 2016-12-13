#!/bin/bash

open -a Terminal "$PWD/Solarized Dark ansi.terminal"

osascript <<EOD
  tell application "Terminal"
    set default settings to settings set "Solarized Dark ansi"
    set font antialiasing of default settings to true
    set font name of default settings to "DejaVu Sans Mono"
    set font size of default settings to 13
    set current settings of tabs of windows to default settings
  end tell

EOD
