[
    
    ['container', {
      type: 'sticky-section',
        before: section => `<div class="sticky-section">${section}`,
      after: '</div>'
    }],    
    ['container', {
      type: 'stick',
      before: info => `<div class="sticky">`,
      after: '</div>'
    }],
    ['container', {
      type: 'unstick',
      before: info => `<div class="unsticky">`,
      after: '</div>'
    }]
 ]
