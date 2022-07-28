var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/sidelkins/sidelkins.github.io.git', // Update to point to your repository  
        user: {
            name: 'Sid Elkins', // update to use your name
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)