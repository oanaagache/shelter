#!/usr/bin/env bash
# ~/bin/get-petfinder-token.sh

petfinder_token="$(curl -s -d "grant_type=client_credentials&client_id=yE34mF5y8uaTkcDpopHWiZnWGoYJX5Ufw59vtFDpOJU78uW5ur&client_secret=HMpwZ6VMhZwUWXYpb9nVmliqdElYYT96mezpupJk" https://api.petfinder.com/v2/oauth2/token | jq .access_token | tr -d '\"')"
#export petfinder_token

echo "Generated token:"
echo "$petfinder_token"


# usage: add this to ~/.bashrc or ~/.bash_profile:
# if [[ -f ~/bin/get-petfinder-token.sh ]]; then
#        source ~/bin/get-petfinder-token.sh
# fi
