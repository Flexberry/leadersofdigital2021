import falcon
import os
class ReputashaEndpoint(object):

  def on_get(self, req, resp):
    stream = os.popen('reputasha.sh ' + req.params['person'])
    output = stream.read()
    resp.body = output

api = falcon.API()
reputasha_endpoint = ReputashaEndpoint()
api.add_route('/dosearch', reputasha_endpoint)