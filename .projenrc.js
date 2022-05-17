const { awscdk } = require("'projen'");
const project = new awscdk.AwsCdkConstructLibrary({
  author: "'GirishMadheswaran'",
  authorAddress: "'girishgv997@gmail.com'",
  cdkVersion: "'2.1.0'",
  defaultReleaseBranch: "'master'",
  name: "'secure-bucket'",
  repositoryUrl: "'https://github.com/GirishMadheswaran/secure-bucket.git'",

  deps: ["'@aws-cdk/core'", "'@aws-cdk/aws-s3'"],

  java: {
    mavenGroupId: "'com.eladb'",
    mavenArtifactId: "'cdk-secure-bucket'",
    javaPackage: "'com.eladb.securebucket'",
  },
});
project.synth();
