/** @param {NS} ns */
export async function main(ns) {

  const server = ns.args[0]
  const serScript = server + ".js"

  const relvl = ns.getServerRequiredHackingLevel(server)
  const hacklvl = ns.getHackingLevel()
  const serport = ns.getServerNumPortsRequired(server)
  
  if (relvl <= hacklvl && serport <= cport(ns)){
    pkil(ns)
    await ns.asleep(400)
    ns.run("scpfile.js", 1, server)
    await ns.asleep(400)
    ns.run("srun.js", 1, server)
  } else {
    ns.tprint("Error: Server Requirement not reached.")
  }
  
  function cport(ns){
    let count = 0
    if (ns.fileExists("NUKE.exe")) count++;
    if (ns.fileExists("BruteSSH.exe")) count++;
    if (ns.fileExists("FTPCrack.exe")) count++;
    if (ns.fileExists("relaySMTP.exe")) count++;
    if (ns.fileExists("HTTPWorm.exe")) count++;
    if (ns.fileExists("SQLInject.exe")) count++;
    return count;
  }

  function pkil(ns) {
    if (ns.fileExists("SQLInject.exe")){
    ns.sqlinject(server)
    ns.print("SQLInject.exe executed.")
    }

    if (ns.fileExists("HTTPWorm.exe")){
      ns.httpworm(server)
      ns.print("HTTPWorm.exe executed.")
    }

    if (ns.fileExists("relaySMTP.exe")){
      ns.relaysmtp(server)
      ns.print("relaySMTP.exe executed.")
    }
    
    if (ns.fileExists("FTPCrack.exe")){
      ns.ftpcrack(server)
      ns.print("FTPCrack.exe executed.")
    }

    if (ns.fileExists("BruteSSH.exe")){
      ns.brutessh(server)
      ns.print("BruteSSH.exe executed.")
    } 

    if (ns.fileExists("NUKE.exe")){
      ns.nuke(server)
      ns.print("NUKE.exe executed.")
    } 
  }


}
