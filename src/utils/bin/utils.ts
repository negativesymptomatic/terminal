import * as bin from './index';
import packageJson from '../../../package.json';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join('\n');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'randomuser';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('/gui', '_self');

  return 'Opening GUI version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:info@gianlucatuscano.it');

  return 'Opening mailto:info@gianlucatuscano.it...';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'nano'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'nano'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'nano'`;
};

export const nano = async (args?: string[]): Promise<string> => {
  return `you cannot use nano, it has too many functions for your needings`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://skriba.it/', '_blank');

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const banner = (args?: string[]): string => {
  return `
     
#         .__        __                         __  .__                                         __  .__             
#    _____|__| _____/  |_  ____   _____ _____ _/  |_|__| ____  ____   ____   ____   _________ _/  |_|__|__  ______  
#   /  ___/  |/    \   __\/  _ \ /     \\__  \\   __\  |/ ___\/  _ \ /    \_/ __ \ / ___\__  \\   __\  \  \/ /  _ \ 
#   \___ \|  |   |  \  | (  <_> )  Y Y  \/ __ \|  | |  \  \__(  <_> )   |  \  ___// /_/  > __ \|  | |  |\   (  <_> )
#  /____  >__|___|  /__|  \____/|__|_|  (____  /__| |__|\___  >____/|___|  /\___  >___  (____  /__| |__| \_/ \____/ 
#       \/        \/                  \/     \/             \/           \/     \/_____/     \/                                   

Type 'help' to see list of available commands.
`;
};
