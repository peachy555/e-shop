pipeline {
    agent { 
    	docker {
    		image 'peachtuntiwong/e-shop-docker-image'
    		args '-p 3000:3000'
    	} 
    }
    stages {
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