pipeline {
    agent any

    environment {
        FRONTEND_IP = "52.66.205.193"
        BACKEND_IP = "13.234.202.187"
        SSH_KEY = "/var/lib/jenkins/.ssh/frontend-key.pem"
    }

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
                scp -i $SSH_KEY -o StrictHostKeyChecking=no -r frontend/* ec2-user@$FRONTEND_IP:/tmp/

                ssh -i $SSH_KEY -o StrictHostKeyChecking=no ec2-user@$FRONTEND_IP "
                    sudo cp -r /tmp/* /usr/share/nginx/html/
                    sudo systemctl restart nginx
                "
                '''
            }
        }

        stage('Deploy Backend') {
            steps {
                sh '''
                ssh -i $SSH_KEY -o StrictHostKeyChecking=no ec2-user@$BACKEND_IP "
                    cd ~/ims-task4/backend
                    npm install
                    pm2 delete backend || true
                    pm2 start server.js --name backend
                    pm2 save
                "
                '''
            }
        }

        stage('Verification') {
            steps {
                sh '''
                ssh -i $SSH_KEY -o StrictHostKeyChecking=no ec2-user@$BACKEND_IP "pm2 status"
                '''
            }
        }
    }
}
