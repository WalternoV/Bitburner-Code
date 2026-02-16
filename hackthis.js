/** @param {NS} ns */
export async function main(ns) {

  const server = ns.args[0]
  const feedback = " is already getting hacked."

  const relvl = ns.getServerRequiredHackingLevel(server)
  const hacklvl = ns.getHackingLevel()
  const serport = ns.getServerNumPortsRequired(server)
  
  if (relvl <= hacklvl && serport <= cport(ns)){
    if (!ns.hasRootAccess(server)){
      portKill(ns)
      await ns.asleep(400)
    }
    if (!ns.fileExists("hacktemp.js", server)){
      scpFile(ns)
      await ns.asleep(400)
    }
    if (!ns.isRunning("hacktemp.js", server)) {
      ns.run("srun.js", 1, server)
      await ns.asleep(400)
    } else {
      ns.alert(server + feedback)
    }
    
  } else {
    ns.tprint("Error: Server Requirement not reached.")
  }
  
  function cport(ns){
    let count = -1
    if (ns.fileExists("NUKE.exe")) count++;
    if (ns.fileExists("BruteSSH.exe")) count++;
    if (ns.fileExists("FTPCrack.exe")) count++;
    if (ns.fileExists("relaySMTP.exe")) count++;
    if (ns.fileExists("HTTPWorm.exe")) count++;
    if (ns.fileExists("SQLInject.exe")) count++;
    return count;
  }
  
  function scpFile(ns) {
    ns.scp("hacktemp.js", server, "home")
  }

  function portKill(ns) {
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
