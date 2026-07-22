pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/amrin4623/ims-task4.git'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh '''
                sudo cp -r frontend/* /usr/share/nginx/html/
                sudo systemctl restart nginx
                '''
            }
        }

        stage('Start Backend') {
            steps {
                dir('backend') {
                    sh '''
                    pm2 delete backend || true
                    pm2 start server.js --name backend
                    pm2 save
                    '''
                }
            }
        }

        stage('Verification') {
            steps {
                sh '''
                pm2 status
                '''
            }
        }
    }
}
