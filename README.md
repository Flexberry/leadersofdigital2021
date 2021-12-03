# leadersofdigital2021
Репозиторий с результатами работы на хакатоне "Цифровой прорыв" (финал).

# Шаги выполнения задания

```sh
kubectl get pods --kubeconfig=kubeconfig

kubectl describe quota --kubeconfig=kubeconfig

kubectl edit resourcequota team15 -n team15 --kubeconfig=kubeconfig

kubectl run test-app --image=flexberry/ember-flexberry-stand-backend --port 6500 --kubeconfig=kubeconfig --requests="cpu=2,memory=1G,requests.storage=1G"

kubectl run test-app-db --image=flexberry/ember-flexberry-stand-postgres --port 5432 --kubeconfig=kubeconfig --requests="cpu=2,memory=1G,requests.storage=10G"

kubectl expose pod test-app-db --port 5432 --type=NodePort -n team15 --kubeconfig=kubeconfig 

kubectl expose pod test-app --port 6500 --type=NodePort -n team15 --kubeconfig=kubeconfig 


kubectl get svc -n team15 --kubeconfig=kubeconfig

kubectl delete pod test-app --kubeconfig=kubeconfig
kubectl delete svс  test-app --kubeconfig=kubeconfig

kubectl delete pod test-app-db --kubeconfig=kubeconfig
kubectl delete svс  test-app-db --kubeconfig=kubeconfig

```
