'use strict'
module.exports = (Franz) => {
  return Franz.loop(() => {
    const failed = document.querySelectorAll('.details:not(.build-success)')
    return Franz.setBadge(failed.length)
  })
}
