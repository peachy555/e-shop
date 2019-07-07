pipeline {
    agent { docker { image 'e-shop-react-docker' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}