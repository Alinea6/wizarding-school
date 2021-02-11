#!/usr/bin/env bash

###
# Must run okteto login first
###

if [ -z "${OKTETO_USERNAME}" ]; then
  echo "OKTETO_USERNAME must be set in order to publish images"
fi

okteto build -t registry.cloud.okteto.net/"${OKTETO_USERNAME}"/wizarding-school-frontend:latest ./Frontend
okteto build -t registry.cloud.okteto.net/"${OKTETO_USERNAME}"/wizarding-school-backend:latest ./Backend

echo "Run: kubectl apply Deployment/spec.yml"

okteto up
