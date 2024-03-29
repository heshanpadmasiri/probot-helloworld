module.exports = (robot) => {
  // Your code here
  robot.log('Yay, the app was loaded!')

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
  robot.on('push', async context => {
    robot.log(context)
  })

  robot.on('issues.opened',async context => {
    const params = context.issue({body: 'Hello world'})
    return context.github.issues.createComment(params)
  })
}
