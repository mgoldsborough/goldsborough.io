# goldsborough.io

Run locally

```
bundle exec jekyll serve --livereload
```

## Setup

Install ruby

```
brew install chruby ruby-install
ruby-install ruby
```

Configure shell

```
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc
echo "chruby ruby-3.3.0" >> ~/.zshrc
```

Install jekyll etc.

```
gem install jekyll bundler
```

Install dependencies

```
bundle install
```