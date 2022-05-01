import pkg_resources

version = pkg_resources.get_distribution('<%= project_name %>').version
__version__ = version

# next base
from jsw_nx.base.every import every
