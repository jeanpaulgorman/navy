/* @flow */

const DEFAULT_ENVIRONMENT_NAME: string = 'dev'

class Environment {

  envName: string;

  constructor(envName) {
    this.envName = envName
  }

  launch(services) {
    console.log('Launching', services)
  }

}

export function getEnvironment(envName: string = DEFAULT_ENVIRONMENT_NAME): Environment {
  return new Environment(envName)
}
