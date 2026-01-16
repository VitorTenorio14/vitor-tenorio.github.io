/**
 * Mapeamento de caminhos para ícones SVG
 * Chave deve corresponder ao valor do campo 'icon' no modelo Skill
 */
export const SKILL_ICONS: Record<string, string> = {
  // ==================== FRONTEND ====================
  'angular': '/assets/icons/angular.svg',
  'react': '/assets/icons/react.svg',
  'typescript': '/assets/icons/typescript.svg',
  'javascript': '/assets/icons/javascript.svg',
  'html5': '/assets/icons/html.svg',
  'css3': '/assets/icons/css.svg',
  'tailwind': '/assets/icons/tailwindcss.svg',
  
  // ==================== BACKEND ====================
  'nodejs': '/assets/icons/node.svg',
  'python': '/assets/icons/python.svg',
  'golang': '/assets/icons/go.svg',
  'postgresql': '/assets/icons/pgsql.svg',
  'mongodb': '/assets/icons/mongodb.svg',
  
  // ==================== DEVOPS ====================
  'docker': '/assets/icons/docker.svg',
  'git': '/assets/icons/git.svg',
  'aws': '/assets/icons/aws.svg',
  'azure': '/assets/icons/azure.svg',
  'cicd': '/assets/icons/cicd.svg',
  'kubernetes': '/assets/icons/kubernetes.svg',
  
  // ==================== TOOLS ====================
  'vscode': '/assets/icons/vs-code.svg',
  'figma': '/assets/icons/figma.svg',
  'postman': '/assets/icons/postman.svg',
  'github': '/assets/icons/github.svg',
  'jira': '/assets/icons/jira.svg',
  
  // Ícone padrão
  'default': '/assets/icons/default.svg'
};

/**
 * Função auxiliar para obter caminho do ícone com fallback
*/
export function getSkillIconPath(iconKey: string): string {
  return SKILL_ICONS[iconKey] || SKILL_ICONS['default'] || '/assets/icons/default.svg';
}