stage('Deploy Frontend') {
    steps {
        sh '''
        scp -i /var/lib/jenkins/.ssh/frontend-key.pem -o StrictHostKeyChecking=no frontend/index.html ec2-user@52.66.205.193:/tmp/

        ssh -i /var/lib/jenkins/.ssh/frontend-key.pem -o StrictHostKeyChecking=no ec2-user@52.66.205.193 "
        sudo cp /tmp/index.html /usr/share/nginx/html/index.html
        sudo systemctl restart nginx
        "
        '''
    }
}
