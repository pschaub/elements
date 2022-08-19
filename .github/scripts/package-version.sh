#!/usr/bin/env bash

SEMVER_VERSION=$(npx find-versions-cli v0.5.5-test123)
if [[ $RELEASE == "true" ]]
then
   VALID_SEMVER_VERSION=$(node scripts/version-helper.js "$SEMVER_VERSION")
  echo "$VALID_SEMVER_VERSION"
elif [[ $PRE_RELEASE == "true" ]]
then
  GITHUB_SHA_SHORT=$(echo "$GITHUB_SHA" | cut -c1-7)
  VALID_SEMVER_VERSION=$(echo "$SEMVER_VERSION"-"$GITHUB_SHA_SHORT")
  echo "$VALID_SEMVER_VERSION"
else
  echo "nothing found in environment for REALEASE or PRE_RELEASE"
  exit 1
fi
