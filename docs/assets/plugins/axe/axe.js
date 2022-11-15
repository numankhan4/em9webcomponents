window.$docsify.plugins.push(hook => {
  hook.ready(() => {});
  hook.doneEach(() => {
    // highlight only contrast issues in console
    // axe.run(
    //   {
    //     runOnly: {
    //       type: 'rule',
    //       values: ['color-contrast']
    //     }
    //   },
    //   (err, results) => {
    //     if (err) throw err;
    //     // console.log(results);
    //   }
    // );
    // console.log('axe is running')
  });
});
