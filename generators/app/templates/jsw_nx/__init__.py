import pkg_resources

version = pkg_resources.get_distribution('<%= project_name %>').version
__version__ = version

# next base
from <%= ctx.underscored(project_name) %>.base.every import every
