node{
    
    stage('git checkout'){
       git branch: 'main', credentialsId: 'github', url: 'https://github.com/mveyone/aws-k8s-jenkins-ansible.git'
    // }
    stage('sending dockerfile to ansible server'){
        sshagent(['ansible-app']) {
         sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.94.243 '
         sh 'scp /var/lib/jenkins/workspace/devops-aws/* ubuntu@172.31.94.243:/home/ubuntu '
         sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.94.243  unzip -o devops-jenkins-aws-k8s-ansible.zip '
      }
    }
    //  stage('build docker image'){
    //     sshagent(['ansible-app']) {
    //      sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42 cd /home/ubuntu '
    //      sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42 docker build -t $JOB_NAME:v1.$BUILD_ID . '
    //      //sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42 ansible-playbook docker-playbook.yml'
    //   }
    // }
    // stage('image tagging '){
    //     sshagent(['ansible-app']) {
    //      sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42 docker image tag $JOB_NAME:v1.$BUILD_ID mveyone/$JOB_NAME:v1.$BUILD_ID '
    //      sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42 docker image tag $JOB_NAME:v1.$BUILD_ID mveyone/$JOB_NAME:latest '
    //   }
    // }
    // stage('Push docker image to docker hub'){
    //     sshagent(['ansible-app']) {
    //         //withCredentials([string(credentialsId: 'dockerhub-pass', variable: 'dockerhub-pass')]) {
    //            //sh "ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42  docker login -u mveyone -p ${dockerhub-pass}"
    //            sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42  docker image push mveyone/$JOB_NAME:v1.$BUILD_ID'
    //            sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42  docker image push mveyone/$JOB_NAME:latest '
    //            sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.92.42  docker image rm mveyone/$JOB_NAME:latest  mveyone/$JOB_NAME:v1.$BUILD_ID $JOB_NAME:v1.$BUILD_ID'
        
    //         }
    //     //}
    // }
    // // stage('copy files from ansible to kubernetes server'){
    // //     sshagent(['ansible-app']){
    // //             sh 'ssh -o StrictHostKeyChecking=no ubuntu@k8s server ip local '
    // //             sh 'scp /var/lib/jenkins/workspace/devops-aws-jenkins-ansible-k8s-app/* ubuntu@k8s server ip local'    
    // //     }
    }
}    