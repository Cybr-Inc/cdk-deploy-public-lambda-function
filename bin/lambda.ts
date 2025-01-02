#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LambdaStack } from '../lib/lambda-stack';

const app = new cdk.App();
new LambdaStack(app, 'LambdaStack', {

  env: { account: '396212980357', region: 'us-east-1' },

});