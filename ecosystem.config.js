/* eslint-disable camelcase */
const LOG_FOLDER = process.env.LOG_FOLDER || '/tmp/logs'

module.exports = {
  LOG_FOLDER,
  apps: [
    {
      name: 'track_trace',
      script: 'npm',
      args: ['run', 'start'],
      time: true,
      out_file: '/dev/null',
      // out_file: `${LOG_FOLDER}/track_trace-pm2-out.log`,
      error_file: '/dev/null',
      // error_file: `${LOG_FOLDER}/track_trace-pm2-out.log`,
    },
  ],
}
