pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh '/usr/bin/npm install'
                }
            }
        }

        stage('Deploy') {
            steps {
                dir('backend') {
                    sh 'pm2 restart backend || pm2 start server.js --name backend'
                }
            }
        }
    }
}
