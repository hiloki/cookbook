Hugo themes
===========

## Table of Contents

- [Configuration](#configuration)
- [Content template](#content-template)
- [Creating a Theme](#creating-a-theme)

## Congiguration 

`config.yml`:
    
        ---
        baseurl:        "http://<username>.github.io/"
        title:          "Blog Title"
        contentdir:     "content"
        layoutdir:      "layouts"
        publishdir:     "public"
        canonifyurls:   true
        metaDataFormat: "yaml"
        uglyUrls:       false
        indexes:
          category:     "categories"
        params:
          AuthorName: "Sota Yamashita"
          GitHubUser: "sotayamashita"
          description:"Hugo Boilerplate Project"
        permalinks:
          post: /:year/:title/
        ...


_[Read more about Hugo-defined variables that you can configure and their current default values](http://gohugo.io/overview/configuration/)_

## Content template

        ---
        date:        "2013-06-21T11:27:27-04:00"
        title:       "Nitro: A quick and simple profiler for Go"
        description: "Nitro is a simple profiler for your Go lang applications"
        tags:        [ "Development", "Go", "profiling" ]
        topics:      [ "Development", "Go" ]
        slug:        "nitro"
        project_url: "https://github.com/spf13/nitro"
        ---

_[Read more about predefined variables that Hugo is aware of and utilizes](http://gohugo.io/content/front-matter/)_

## Creating a Theme

_[Read more about creating a theme](http://gohugo.io/themes/creation/)_

