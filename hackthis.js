/** @param {NS} ns */
export async function main(ns) {

  const server = ns.args[0]
  const serScript = server + ".js"

  const relvl = ns.getServerRequiredHackingLevel(server)
  const hacklvl = ns.getHackingLevel()
  const serport = ns.getServerNumPortsRequired(server)
  
  if (relvl <= hacklvl && serport <= cport(ns)){
    if (!ns.hasRootAccess(server)){
      ns.run("portkill.js", 1, server)
      await ns.asleep(400)
    }
    if (!ns.fileExists("hacktemp.js", server)){
      ns.run("scpfile.js", 1, server)
      await ns.asleep(400)
    }
    if (!ns.isRunning("hacktemp.js", server)) {
      ns.run("srun.js", 1, server)
      await ns.asleep(400)
    }
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

}
