pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/amrin4623/ims-task4.git'
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                echo "Deployment Successful"
                '''
            }
        }
    }
}