pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.62.1-jammy' 
            args '--entrypoint='
        }
    } 

    stages {
        stage('Installation des dependances') {
            steps{
                sh 'npm install'
            }
        }
        stage('Lancement de test') {
            steps{
                sh 'npx playwright test --project="firefox"'
            }
        }
    }
}
