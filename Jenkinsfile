node{
    
    stage('git checkout'){
       git branch: 'main', credentialsId: 'github', url: 'https://github.com/mveyone/aws-k8s-jenkins-ansible.git'
    }
    stage('sending dockerfile to ansible server'){
        sshagent(['ansible-app']) {
         sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42 '
         sh 'scp /var/lib/jenkins/workspace/DEVOPS-CICD/* ubuntu@172.31.92.42:/home/ubuntu '
         sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42  unzip -o devops-jenkins-aws-k8s-ansible.zip '
      }
    }
     stage('build docker image'){
        sshagent(['ansible-app']) {
         sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42 cd /home/ubuntu '
         sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42 docker build -t $JOB_NAME:v1.$BUILD_ID . '
         //sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42 ansible-playbook docker-playbook.yml'
      }
    }
    stage('image tagging '){
        sshagent(['ansible-app']) {
         sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42 docker image tag $JOB_NAME:v1.$BUILD_ID mveyone/$JOB_NAME:v1.$BUILD_ID '
         sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42 docker image tag $JOB_NAME:v1.$BUILD_ID mveyone/$JOB_NAME:latest '
      }
    }
    stage('Push docker image to docker hub'){
        sshagent(['ansible-app']) {
            //withCredentials([string(credentialsId: 'dockerhub-pass', variable: 'dockerhub-pass')]) {
               //sh "ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42  docker login -u mveyone -p ${dockerhub-pass}"
               sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42  docker image push mveyone/$JOB_NAME:v1.$BUILD_ID'
               sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42  docker image push mveyone/$JOB_NAME:latest '
        
            }
        //}
    }
}    