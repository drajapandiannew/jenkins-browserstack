pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run') {
            steps {
                bat 'npm run bdd'
            }
        }
    }
}