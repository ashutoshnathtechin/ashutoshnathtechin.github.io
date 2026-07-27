const username = 'ashutoshnathtechin';

document.getElementById('current-year').textContent = new Date().getFullYear();

async function fetchGitHubProfile() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('Failed to fetch profile');
        const data = await response.json();
        
        const header = document.getElementById('profile-header');
        
        header.innerHTML = `
            <img src="${data.avatar_url}" alt="${data.login}" class="profile-avatar">
            <div class="profile-info">
                <h1>${data.name || data.login}</h1>
                <p>${data.bio || 'Passionate developer building awesome things on the web.'}</p>
                <div class="profile-stats">
                    <span class="stat"><i class="fa-solid fa-users"></i> ${data.followers} Followers</span>
                    <span class="stat"><i class="fa-solid fa-user-plus"></i> ${data.following} Following</span>
                    <span class="stat"><i class="fa-solid fa-code-commit"></i> ${data.public_repos} Repos</span>
                </div>
                <a href="${data.html_url}" target="_blank" rel="noopener noreferrer" class="github-link">
                    <i class="fa-brands fa-github"></i> View on GitHub
                </a>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching profile:', error);
        document.getElementById('profile-header').innerHTML = `<p>Error loading profile data.</p>`;
    }
}

async function fetchGitHubRepos() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
        if (!response.ok) throw new Error('Failed to fetch repos');
        const repos = await response.json();
        
        const reposGrid = document.getElementById('repos-grid');
        reposGrid.innerHTML = ''; // Clear loader
        
        if (repos.length === 0) {
            reposGrid.innerHTML = `<p>No repositories found.</p>`;
            return;
        }

        repos.forEach(repo => {
            if (repo.fork) return; // Optional: skip forks

            const languageColor = getLanguageColor(repo.language);
            
            const card = document.createElement('a');
            card.href = repo.html_url;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            card.className = 'repo-card';
            
            card.innerHTML = `
                <div class="repo-header">
                    <span class="repo-title">
                        <i class="fa-regular fa-folder-open"></i> ${repo.name}
                    </span>
                </div>
                <p class="repo-desc">${repo.description || 'No description provided.'}</p>
                <div class="repo-meta">
                    ${repo.language ? `
                    <span>
                        <span class="language-dot" style="background-color: ${languageColor}"></span>
                        ${repo.language}
                    </span>` : ''}
                    <span><i class="fa-regular fa-star"></i> ${repo.stargazers_count}</span>
                    <span><i class="fa-solid fa-code-branch"></i> ${repo.forks_count}</span>
                </div>
            `;
            
            reposGrid.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching repos:', error);
        document.getElementById('repos-grid').innerHTML = `<p>Error loading repositories.</p>`;
    }
}

// Simple map for common language colors
function getLanguageColor(lang) {
    const colors = {
        'JavaScript': '#f1e05a',
        'Python': '#3572A5',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'TypeScript': '#3178c6',
        'Java': '#b07219',
        'C++': '#f34b7d',
        'C#': '#178600',
        'Ruby': '#701516',
        'Go': '#00ADD8',
        'PHP': '#4F5D95',
        'Vue': '#41b883',
        'React': '#61dafb'
    };
    return colors[lang] || '#8b949e'; // default color
}

// Initialize
fetchGitHubProfile();
fetchGitHubRepos();
