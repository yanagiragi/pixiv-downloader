#!/bin/bash

cd /Pixiv-Downloader/bin

node cli.js -i $SESSION -w "${WEBHOOK_URL}" -t "${WEBHOOK_TOKEN}"