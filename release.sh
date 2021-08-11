#!/usr/bin/env bash
echo -n "Enter npm one-time password (OTP): "
read OTP 
yarn publish --otp=$OTP && git push --follow-tags origin main
