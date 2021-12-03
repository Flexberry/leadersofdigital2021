# leadersofdigital2021
Репозиторий с результатами работы на хакатоне "Цифровой прорыв" (финал).

# Шаги выполнения задания

```sh
kubectl get pods --kubeconfig=kubeconfig

kubectl describe quota --kubeconfig=kubeconfig

kubectl edit resourcequota team15 -n team15 --kubeconfig=kubeconfig

kubectl run metaverse-app --image=bratchikov/metaverse-app --port 80 --kubeconfig=kubeconfig --requests="cpu=2,memory=1G"

kubectl run metaverse-postgre-sql --image=bratchikov/metaverse-postgre-sql --port 5432 --kubeconfig=kubeconfig --requests="cpu=2,memory=1G"

kubectl expose pod metaverse-postgre-sql --port 5432 --type=NodePort -n team15 --kubeconfig=kubeconfig 

kubectl expose pod metaverse-app --port 80 --type=NodePort -n team15 --kubeconfig=kubeconfig 

kubectl get svc -n team15 --kubeconfig=kubeconfig

kubectl delete pod metaverse-app --kubeconfig=kubeconfig
kubectl delete service  test-app --kubeconfig=kubeconfig

kubectl delete pod test-app-db --kubeconfig=kubeconfig
kubectl delete service  test-app-db --kubeconfig=kubeconfig

```
