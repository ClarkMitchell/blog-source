---
permalink: laravel-deployment-using-gitlab-pipelines
image: /covers/laravel-deployment-using-gitlab-pipelines.gif
description: In this tutorial, we will set up a complex GitLab pipeline that builds our application, tests it and deploys it using Laravel Deployer.
tags: [ 'Vue.js', 'Vuepress' ]
date: 2019-09-24
icon: launch
ribbon: popular
disqus: ghost-5b1869552cd1381e6de492f7
---

# A Blog Format For Better Context 


<StickySection id="foobar" first="
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus,
                               nulla eget condimentum scelerisque, ipsum magna varius erat, ut posuere purus tellus vel ante. 
                               Duis rhoncus interdum molestie. Fusce semper ex ut tortor ultricies, ac imperdiet metus ornare. 
                               Donec interdum iaculis justo ac rhoncus. Integer convallis pharetra urna, vehicula eleifend magna 
                               vehicula vel. pellentesque turpis. Integer nulla sapien, ultricies vitae leo dignissim, 
                               condimentum bibendum felis."
                             second="
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus,
                              nulla egetc rhoncus. Integer convallis pharetra urna, vehicula eleifend magna 
                              vehicula vel. Duis in pellentesque turpis. Integer nulla sapien, ultricies vitae leo dignissim, 
                              condimentum bibendum felis."
                              third="
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus,
                                              nulla eget condimentum scelerisque, ipsum magna varius erat, ut posuere purus tellus vel ante. 
                                              Duis rhoncus interdum molestie. Fusce semper ex ut tortor ultricies, ac imperdiet metus ornare. 
                                              Donec interdun pellentesque turpis. Integer nulla sapien, ultricies vitae leo dignissim, 
                                              condimentum bibendum felis."
                                            fourth="
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus,
                                             nulla eget condimentum scelerisque, ipsum magna varius erat, ut posuere purus tellus vel ante. 
                                             Duis rhons in pellentesque turpis. Integer nulla sapien, ultricies vitae leo dignissim, 
                                             condimentum bibendum felis."
                >

```php {4,5,6,7,8,9,10}
<?php

namespace App\Http\Middleware;

use Closure;

class CheckAge
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->age <= 200) {
            return redirect('home');
        }

        return $next($request);
    }
}
```

</StickySection>

<StickySection id="barfoo" first="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus, nulla eget condimentum scelerisque, ipsum magna varius erat, ut posuere purus tellus vel ante. Duis rhoncus interdum molestie. Fusce semper ex ut tortor ultricies, ac imperdiet metus ornare. Donec interdum iaculis justo ac rhoncus. Integer convallis pharetra urna, vehicula eleifend magna vehicula vel. Duis in pellentesque turpis. Integer nulla sapien, ultricies vitae leo dignissim, condimentum bibendum felis. Phasellus malesuada lobortis bibendum. Praesent vulputate nisi vel facilisis rutrum. Integer rhoncus ultricies posuere. Vestibulum nibh odio, eleifend in tellus id, placerat rutrum nunc. Pellentesque quis malesuada leo. Pellentesque urna augue, suscipit eu ipsum sed, hendrerit laoreet dui. Nulla ultricies eros id ultrices venenatis. Praesent ullamcorper risus vitae tellus dapibus imperdiet. Proin velit metus, pellentesque eu pharetra nec, volutpat a risus. Maecenas tristique pulvinar elit et lacinia. Donec imperdiet lacus ac dapibus ullamcorper. Donec sed faucibus justo. Etiam tincidunt, felis at pretium elementum, neque tortor laoreet ipsum, et placerat ante nibh sit amet libero. Curabitur consequat malesuada nulla id cursus. Aenean finibus nisl ornare metus aliquam, in posuere leo mollis. Ut ac placerat sapien.Suspendisse sollicitudin maximus placerat. Aliquam eget metus non diam interdum elementum. Etiam fringilla mattis euismod. In egestas finibus rhoncus. Duis enim arcu, varius non ante ac, porta commodo felis. Curabitur aliquam interdum lectus sed sagittis. Curabitur a elit bibendum, facilisis arcu id, tincidunt tortor. Maecenas lacinia auctor ante nec viverra. Nullam mollis ligula eu pretium aliquam. Pellentesque et nisl porttitor, facilisis arcu sed, mattis justo. Nulla facilisi. Ut vestibulum odio vitae erat consequat bibendum. Proin sodales odio ligula. Fusce imperdiet, urna id egestas condimentum, purus quam placerat massa, ut fermentum eros libero porttitor dolor.Nulla pulvinar gravida efficitur. Praesent consectetur elit vel tortor suscipit, tristique pretium nulla iaculis. Phasellus imperdiet ligula nec ex scelerisque, in bibendum neque tristique. Cras erat elit, dignissim eu risus in, finibus suscipit elit. Praesent tincidunt est diam, sed lobortis elit blandit et. Nam nec euismod mauris. Nunc non ultricies enim, nec condimentum tellus. Nulla ut efficitur lectus. Vestibulum viverra sem et volutpat porta. Sed tincidunt erat sit amet lorem mattis ullamcorper. Sed mattis blandit massa, at tincidunt tortor viverra in. Aenean mi erat, elementum id metus sed, blandit efficitur nisl. Proin nec erat pharetra, convallis lorem eget, venenatis tellus. Vestibulum placerat ultrices sodales. Vestibulum euismod in mi at pharetra. Sed auctor elementum mollis. Proin libero mauris, feugiat a libero et, lobortis cursus nunc. ">

```php
<?php

namespace App\Http\Middleware;

use Closure;

class CheckAge
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->age <= 200) {
            return redirect('home');
        }

        return $next($request);
    }
}
```

</StickySection>