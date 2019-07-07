pipeline {
    agent { 
        label 'docker'
    	docker {
    		image 'peachtuntiwong/e-shop-docker-image'
    		args '-p 3000:3000'
    	} 
    }
    stages {
        stage('Docker node test') {
            agent {
                docker {
                // Set both label and image
                label 'docker'
                image 'node:7-alpine'
                args '--name docker-node' // list any args
                }
            }
            steps {
                // Steps run in node:7-alpine docker container on docker slave
                sh 'node --version'
            }
        }

        stage('build') {
            steps {
                sh 'echo "Start Jenkins build stage..."'
                sh 'npm install'
                sh 'echo "Installed: npm..."'
                retry(3) {
                    sh ''
                }
            }
        }
    }
    post {
        always {
            echo 'Jenkins Pipeline have finished running...'
        }
        success {
            echo 'Ran sucessfully...'
        }
        failure {
            echo 'Failed to run...'
        }
        unstable {
            echo 'Unstable run...'
        }
        changed {
            echo 'State of Pipeline have been changed'
        }
    }
}