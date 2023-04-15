#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

path="$1"

# -not -path '*/venv/*' \
file_hashes="$(
  cd $path \
  && find . -type f -not -path './.**' \
  | sort \
  | xargs md5sum
)"

hash="$(echo "$file_hashes" | md5sum | cut -d' ' -f1)"
echo '{ "hash": "'"$hash"'" }'