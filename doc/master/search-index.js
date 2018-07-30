crystal_doc_search_index_callback({"repository_name":"github.com/meew0/discordcr","body":"[![docs](https://img.shields.io/badge/docs-latest-green.svg?style=flat-square)](https://meew0.github.io/discordcr/doc/v0.4.0/)\n\n# discordcr\n\n(The \"cr\" stands for \"creative name\".)\n\ndiscordcr is a minimalist [Discord](https://discordapp.com/) API library for\n[Crystal](https://crystal-lang.org/), designed to be a complement to\n[discordrb](https://github.com/meew0/discordrb) for users who want more control\nand performance and who care less about ease-of-use.\n\ndiscordcr isn't designed for beginners to the Discord API - while experience\nwith making bots isn't *required*, it's certainly recommended. If you feel\noverwhelmed by the complex documentation, try\n[discordrb](https://github.com/meew0/discordrb) first and then check back.\n\nUnlike many other libs which handle a lot of stuff, like caching or resolving,\nthemselves automatically, discordcr requires the user to do such things\nmanually. It also doesn't provide any advanced abstractions for REST calls;\nthe methods perform the HTTP request with the given data but nothing else.\nThis means that the user has full control over them, but also full\nresponsibility. discordcr does not support user accounts; it may work but\nlikely doesn't.\n\n## Installation\n\nAdd this to your application's `shard.yml`:\n\n```yaml\ndependencies:\n  discordcr:\n    github: meew0/discordcr\n```\n\n## Usage\n\nAn example bot can be found\n[here](https://github.com/meew0/discordcr/blob/master/examples/ping.cr). More\nexamples will come in the future.\n\nA short overview of library structure: the `Client` class includes the `REST`\nmodule, which handles the REST parts of Discord's API; the `Client` itself\nhandles the gateway, i. e. the interactive parts such as receiving messages. It\nis possible to use only the REST parts by never calling the `#run` method on a\n`Client`, which is what does the actual gateway connection.\n\nThe example linked above has an example of an event (`on_message_create`) that\nis called through the gateway, and of a REST call (`client.create_message`).\nOther gateway events and REST calls work much in the same way - see the\ndocumentation for what specific events and REST calls do.\n\nCaching is done using a separate `Cache` class that needs to be added into\nclients manually:\n\n```cr\nclient = Discord::Client.new # ...\ncache = Discord::Cache.new(client)\nclient.cache = cache\n```\n\nResolution requests for objects can now be done on the `cache` object instead of\ndirectly over REST, this ensures that if an object is needed more than once\nthere will still only be one request to Discord. (There may even be no request\nat all, if the requested data has already been obtained over the gateway.)\nAn example of how to use the cache once it has been instantiated:\n\n```cr\n# Get the username of the user with ID 66237334693085184\nuser = cache.resolve_user(66237334693085184_u64)\nuser = cache.resolve_user(66237334693085184_u64) # won't do a request to Discord\nputs user.username\n```\n\nApart from this, API documentation is also available, at\nhttps://meew0.github.io/discordcr/doc/v0.1.0/.\n\n## Contributing\n\n1. Fork it (https://github.com/meew0/discordcr/fork)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [meew0](https://github.com/meew0) - creator, maintainer\n- [RX14](https://github.com/RX14) - Crystal expert, maintainer\n","program":{"html_id":"github.com/meew0/discordcr/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"github.com/meew0/discordcr","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[]}})