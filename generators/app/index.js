"use strict";
const Generator = require("yeoman-generator");
const yosay = require("yosay");
const globby = require("globby");
const yoHelper = require("@jswork/yeoman-generator-helper");
const genp = require("@jswork/generator-prompts");
const prompts = genp([
  "author",
  "email",
  "scope",
  "registry",
  "project_name",
  "description",
]);

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the stunning $
          "generator-generator-pypi"
         generator!`
      )
    );

    this.props = await this.prompt(prompts);
  }

  writing() {
    const { project_name } = this.props;
    const ctx = yoHelper.ctx;
    // rename
    yoHelper.rename(this, "jsw_nx", ctx.underscored(project_name));

    this.fs.copyTpl(
      globby.sync(this.templatePath("**"), { dot: true }),
      this.destinationPath(),
      { ...this.props, ctx }
    );
  }
};
