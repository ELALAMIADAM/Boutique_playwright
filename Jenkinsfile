pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.62.1-jammy' 
            args '--entrypoint='
        }
    } 
    // parameters {
    //     booleanParam(name: 'AllNavigators', defaultValue: true, description: 'Would like to test on all Navs?')

    //     choice(name: 'Browser', choices: ['Edge', 'firefox'], description: 'Pick a browser if you want to test just one Nav')
        
    //     choice(name: 'Tags', choices: ['TNR', 'Regression'], description: 'Pick a tag')

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
